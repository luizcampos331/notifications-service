import { randomUUID } from 'node:crypto';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repository';
import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      recipientId: randomUUID(),
      content: new Content('Testing cancel a notification'),
      category: 'Test',
    });

    await notificationsRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(async () => {
      return cancelNotification.execute({
        notificationId: 'notificationId',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
