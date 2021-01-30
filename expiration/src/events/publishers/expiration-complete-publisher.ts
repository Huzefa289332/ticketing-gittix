import { Publisher, Subjects, ExpirationCompleteEvent } from '@hbgittix/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
	subject: ExpirationCompleteEvent['subject'] = Subjects.ExpirationComplete;
}
