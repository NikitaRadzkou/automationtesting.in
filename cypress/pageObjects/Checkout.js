import Home from './Home'
import Item from './Item'

class Checkout {
  get productTitle() {
    return cy.get('td[class=product-name]')
  }

  get firstPrice() {
    return cy.get('td[class=product-total]')
  }

  get subtotalPrice() {
    return cy.get(
      '#order_review > table > tbody > tr > td.product-total > span'
    )
  }

  get taxPrice() {
    return cy.get(
      '#order_review > table > tfoot > tr.tax-rate.tax-rate-roaming-tax-1 > td > span'
    )
  }

  get totalPrice() {
    return cy.get('strong > .woocommerce-Price-amount')
  }

  visit() {
    return cy.visit('/checkout')
  }

  verifyTotalMoreSubtotal() {
    this.totalPrice.then($span => {
      const totalPrice = Number($span.text().replace(/[^0-9,.]/g, ''))
      this.subtotalPrice.should($span => {
        const subtotalPrice = Number($span.text().replace(/[^0-9,.]/g, ''))
        if (totalPrice <= subtotalPrice) {
          throw new Error(
            'Subtotal price cannot be more than or equal to Total price'
          )
        }
      })
    })
    return this
  }

  verifyTotalPrice() {
    this.totalPrice.then($span => {
      const totalPrice = $span.text().replace(/[^0-9,.]/g, '')
      this.taxPrice.then($span => {
        const taxPrice = Number($span.text().replace(/[^0-9,.]/g, ''))
        this.subtotalPrice.should($span => {
          const subtotalPrice = Number($span.text().replace(/[^0-9,.]/g, ''))
          expect(totalPrice).to.contain(String(subtotalPrice + taxPrice))
        })
      })
    })
    return this
  }

  verifyTitle(url) {
    cy.visit(url)
    Item.productTitle.then($h1 => {
      const txt1 = $h1
        .text()
        .replace(/[^a-zа-яё]/gi, '')
        .toLowerCase()
      cy.visit('/checkout')
      this.productTitle.should($a => {
        const txt2 = $a
          .text()
          .replace(/[^a-zа-яё]/gi, '')
          .toLowerCase()
        expect(txt2).to.eq(txt1)
      })
    })
    return this
  }

  verifyPrice() {
    Home.price.then($price => {
      const price1 = $price.text().replace(/[^0-9,.]/g, '')

      cy.visit('/checkout')
      this.firstPrice.should($td => {
        const price2 = $td.text().replace(/[^0-9,.]/g, '')
        expect(price2).to.eq(price1)
        $td.text()
      })
    })
    return this
  }

  verifyPriceCoupon() {
    Home.price.then($price => {
      const price1 = Number($price.text().replace(/[^0-9,.]/g, ''))

      cy.visit('/checkout')
      this.firstPrice.should($td => {
        const price2 = Number($td.text().replace(/[^0-9,.]/g, ''))
        expect(price2 - 50).to.eq(price1)
        $td.text()
      })
    })
    return this
  }
}

export default new Checkout()
