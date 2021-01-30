import { Publisher, Subjects, OrderCreatedEvent } from '@hbgittix/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
	subject: OrderCreatedEvent['subject'] = Subjects.OrderCreated;
}
