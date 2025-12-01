interface IPaymentMethod {
  pay(): void;
}

class CreditCardPaymentMethod implements IPaymentMethod {
  pay(): void {
    throw new Error('Method not implemented.');
  }
}

class EftPaymentMethod implements IPaymentMethod {
  pay(): void {
    throw new Error('Method not implemented.');
  }
}

class PayTRPaymentMethod implements IPaymentMethod {
  pay(): void {
    throw new Error('Method not implemented.');
  }
}

enum PaymentMethod {
  CreditCard,
  Eft,
  PayTR,
}

class PaymentMethodFactory {
  static create(paymentMethod: PaymentMethod): IPaymentMethod {
    switch (paymentMethod) {
      case PaymentMethod.CreditCard:
        return new CreditCardPaymentMethod();
      default:
        throw new Error('Unknwon payment method.');
    }
  }
}

function creditCardPayment(): void {}

class PaymentProcessor {
  processPayment(paymentMethod: PaymentMethod) {
    switch (paymentMethod) {
      case PaymentMethod.CreditCard:
        return creditCardPayment();
    }

    const paymentAdapter = PaymentMethodFactory.create(paymentMethod);

    return paymentAdapter.pay();
  }
}
