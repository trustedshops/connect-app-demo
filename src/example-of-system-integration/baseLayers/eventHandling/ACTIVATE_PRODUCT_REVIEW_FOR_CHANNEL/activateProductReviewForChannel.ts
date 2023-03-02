import { api } from '@/database-container/api/api'
import { dispatchAction, EVENTS } from '@/example-of-system-integration/eventsLib'
import { IMappedChannel } from '../../types'
import { sendingNotification } from '../NOTIFICATION'

export function activateProductReviewForChannel(event: { payload: IMappedChannel }) {
  try {
    console.log('Demo: ACTIVATE_PRODUCT_REVIEW_FOR_CHANNEL', event.payload)

    const activatedProductReviewForChannel = api.activateProductReviewForChannel(event.payload)
    dispatchAction({
      action: EVENTS.SET_PRODUCT_REVIEW_FOR_CHANNEL,
      payload: activatedProductReviewForChannel,
    })
    sendingNotification(
      EVENTS.ACTIVATE_PRODUCT_REVIEW_FOR_CHANNEL,
      'PRODUCT REVIEW FOR CHANNEL ACTIVATED',
      'success',
      'save'
    )
  } catch (error) {
    setTimeout(() => {
      sendingNotification(
        EVENTS.ACTIVATE_PRODUCT_REVIEW_FOR_CHANNEL,
        'PRODUCT REVIEW FOR CHANNEL NOT ACTIVATED',
        'error',
        'save'
      )
    }, 400)
  }
}