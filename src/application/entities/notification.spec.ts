import { randomUUID } from 'node:crypto';
import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('Should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: randomUUID(),
      content: new Content('Testing create a new notification'),
      category: 'Test',
    });

    expect(notification).toBeTruthy();
  });
});
