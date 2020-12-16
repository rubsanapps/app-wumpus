import { MessageService } from './message.service';

describe('MessageService', () => {
  let service;

  beforeEach(() => {
    service = new MessageService();
  });

  it('should run #add()', async () => {

    service.add();

  });

  it('should run #clear()', async () => {

    service.clear();

  });

});
