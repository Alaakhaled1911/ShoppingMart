interface Amount {
    amount:number;
}

const FormattedPrice = ({amount} :Amount ) => {
    const FormattedAmount = new Number (amount).toLocaleString("en-US",{
        style:"currency",
        currency:"USD",
        maximumFractionDigits:2,
    });
return (
<span>{FormattedAmount}</span>

) 
}

export default FormattedPrice