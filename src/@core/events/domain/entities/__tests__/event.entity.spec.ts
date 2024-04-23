import { Event } from '../event.entity';
import { PartnerId } from '../partner.entity';

test('Deve criar um evento', () => {
  const event = Event.create({
    name: 'Evento 1',
    description: 'Descrição de evento 1',
    date: new Date(),
    partner_id: new PartnerId(),
  });

  event.addSection({
    name: 'Sessão 1',
    description: 'Descrição da sessão 1',
    total_spots: 100,
    price: 1000,
  });

  event.addSection({
    name: 'Sessão 2',
    description: 'Descrição da sessão 2',
    total_spots: 100,
    price: 1000,
  });
  console.log(event);
  expect(event.sections.size).toBe(2);
  expect(event.total_spots).toBe(200);

  const [section] = event.sections;

  expect(section.spots.size).toBe(100);
});
