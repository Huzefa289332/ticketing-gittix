import { Publisher, Subjects, TicketCreatedEvent } from '@hbgittix/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
	subject: TicketCreatedEvent['subject'] = Subjects.TicketCreated;
}
