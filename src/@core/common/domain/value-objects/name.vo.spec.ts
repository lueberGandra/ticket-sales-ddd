//import { Customer } from 'src/@core/events/domain/entities/customer.entity';
import { Name } from './name.vo';

test('must create a valid name', () => {
  const name = new Name('aaaa asf');
  expect(name.value).toBe('Aaaa Asf');
});
