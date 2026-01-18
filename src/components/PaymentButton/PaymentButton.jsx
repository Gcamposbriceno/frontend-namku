import "./PaymentButton.css";
function PaymentButton() {
  const handleClick = () => {
    window.location.href =
      "https://www.webpay.cl/company/171156?utm_source=transbank&utm_medium=portal3.0&utm_campaign=link_portal";
  };

  return (
    <button className="btn-call-to-action" onClick={handleClick}>
      <a>DONA AQUÍ</a>
    </button>
  );
}

export default PaymentButton;
