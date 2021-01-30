import { Publisher, Subjects, TicketUpdatedEvent } from '@hbgittix/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
	subject: TicketUpdatedEvent['subject'] = Subjects.TicketUpdated;
}
