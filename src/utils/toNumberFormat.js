export default value => new Intl.NumberFormat('en-US', {
    style: 'decimal'
}).format(value);