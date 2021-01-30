import { Subjects, Publisher, OrderCancelledEvent } from '@hbgittix/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
	subject: OrderCancelledEvent['subject'] = Subjects.OrderCancelled;
}
