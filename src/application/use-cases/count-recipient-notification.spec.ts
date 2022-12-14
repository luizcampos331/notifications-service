import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repository';
import { CountRecipientNotification } from './count-recipient-notification';
import { makeNotification } from '@test/fatories/notification-fatory';

describe('Count recipients notifications', () => {
  it('should be able to count recipients notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
