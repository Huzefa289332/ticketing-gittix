import {
	Listener,
	Subjects,
	OrderCancelledEvent,
	OrderStatus,
} from '@hbgittix/common';
import { queueGroupName } from './queue-group-name';
import { Order } from '../../models/order';
import { Message } from 'node-nats-streaming';

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
	subject: OrderCancelledEvent['subject'] = Subjects.OrderCancelled;
	queueGroupName = queueGroupName;

	async onMessage(data: OrderCancelledEvent['data'], msg: Message) {
		const order = await Order.findOne({
			_id: data.id,
			version: data.version - 1,
		});

		if (!order) {
			throw new Error('Order not found');
		}

		order.set({
			status: OrderStatus.Cancelled,
		});

		await order.save();

		msg.ack();
	}
}
