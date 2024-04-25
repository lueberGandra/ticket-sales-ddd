import { Uuid } from 'src/@core/common/domain/value-objects/uuid.vo';
import { AggregateRoot } from '../../../common/domain/aggregate-root';
import { Event } from './event.entity';

export class PartnerId extends Uuid {}

export type InitEventCommand = {
  name: string;
  description: string;
  date: Date;
};

export type PartnerConstructorProps = {
  id?: PartnerId | string;
  name: string;
};

export class Partner extends AggregateRoot {
  id: PartnerId;
  name: string;

  constructor(props: PartnerConstructorProps, id?: PartnerId) {
    super();
    console.log(props, id);
    this.id =
      typeof props.id === 'string'
        ? new PartnerId(props.id)
        : props.id ?? new PartnerId();
    this.name = props.name;
  }

  static create(command: { name: string }) {
    return new Partner({
      name: command.name,
    });
  }

  initEvent(command: InitEventCommand) {
    return Event.create({
      ...command,
      partner_id: this.id,
    });
  }

  changeName(name: string) {
    this.name = name;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
