import { getConsentCookie } from './cookie-functions.mjs'

/**
 * Embed Card Youtube functionality
 */
class EmbedCard {
  /**
   * @param {Element} $module - HTML element
   */
  constructor($module) {
    if (
      !($module instanceof HTMLElement) ||
      !document.body.classList.contains('govuk-frontend-supported')
    ) {
      return this
    }

    this.$module = $module

    this.renderEmbed()
  }

  /**
   * Render the embed
   *
   * Replaces the placeholder with the iframe if cookies are set.
   */
  renderEmbed() {
    const consentCookie = getConsentCookie()

    if (consentCookie.campaign) {
      console.log('YOUTUBE TIME')
    } else {
      console.log('NO')
    }
  }
}

export default EmbedCard
