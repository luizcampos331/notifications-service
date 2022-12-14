import { randomUUID } from 'node:crypto';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('Should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      recipientId: randomUUID(),
      content: 'Testing send a notification',
      category: 'Test',
    });

    expect(notification).toBeTruthy();
  });
});
