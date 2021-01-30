import { Subjects, Publisher, PaymentCreatedEvent } from '@hbgittix/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
	subject: PaymentCreatedEvent['subject'] = Subjects.PaymentCreated;
}
