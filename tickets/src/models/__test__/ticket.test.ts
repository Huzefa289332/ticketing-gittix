import { Ticket } from '../ticket';

it('Implements optimistic concurrency control', async (done) => {
	// Create an instant of a ticket
	const ticket = Ticket.build({
		title: 'concert',
		price: 5,
		userId: '123',
	});

	// Save the ticket to the database
	await ticket.save();

	// fetch the ticket twice
	const firstInstance = await Ticket.findById(ticket.id);
	const secondInstance = await Ticket.findById(ticket.id);

	// make the separate changes to the ticket we fetched
	firstInstance!.set({ price: 10 });
	secondInstance!.set({ price: 15 });

	// save the first fetch ticket
	await firstInstance!.save();

	// save the second fetch ticket

	try {
		await secondInstance!.save();
	} catch (err) {
		return done();
	}
	throw new Error('Should not reach this point');
});

it('increment the version on multiple saves', async () => {
	const ticket = Ticket.build({
		title: 'concert',
		price: 20,
		userId: '123',
	});

	await ticket.save();
	expect(ticket.version).toEqual(0);
	await ticket.save();
	expect(ticket.version).toEqual(1);
	await ticket.save();
	expect(ticket.version).toEqual(2);
});
