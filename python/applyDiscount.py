def applyDiscount(price, discount):
    price = float(input("Enter the product price: "))
    discount = float(input("Enter the discount percentage: "))

    if price != int or float or discount != int or float:
        return "The price and discount should be a number"
    if discount not in range(0, 100):
        return "The discount should be between 0 and 100"
    if price > 0:
        return price - (price * discount / 100)
    else:        
        return "The price should be greater than 0"