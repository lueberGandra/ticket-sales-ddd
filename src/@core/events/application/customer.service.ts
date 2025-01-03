import { ICustomerRepository } from '../domain/repositories/customer-repository.interface';

export class CustomerService {
  constructor(private customerRepo: ICustomerRepository) {}

  list() {}

  register() {}
}
