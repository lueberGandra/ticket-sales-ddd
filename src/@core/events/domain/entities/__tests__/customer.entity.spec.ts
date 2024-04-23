import { Name } from 'src/@core/common/domain/value-objects/name.vo';
import { Customer, CustomerId } from '../customer.entity';
import { Cpf } from 'src/@core/common/domain/value-objects/cpf.vo';

test('must create a customer', () => {
  const customer = Customer.create({
    name: 'john doe',
    cpf: '081.139.080-21',
  });
  expect(customer).toBeInstanceOf(Customer);
  expect(customer.id).toBeDefined();
  expect(customer.id).toBeInstanceOf(CustomerId);
  expect(customer.name.value).toBe('John Doe');
  expect(customer.cpf.value).toBe('08113908021');

  const customer2 = new Customer({
    id: new CustomerId(customer.id.value),
    name: new Name('john doe'),
    cpf: new Cpf('434.753.650-06'),
  });

  expect(customer.equals(customer2)).toBe(true);
});
