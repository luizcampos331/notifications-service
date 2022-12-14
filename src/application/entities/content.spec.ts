import { Content } from './content';

describe('Notification content', () => {
  it('Should be able to create a notification content', () => {
    const content = new Content('Testing create a new notification content');

    expect(content).toBeTruthy();
  });

  it('Should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('Test')).toThrow();
  });

  it('Should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
