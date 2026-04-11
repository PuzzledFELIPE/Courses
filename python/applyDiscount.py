def applyDiscount(price, discount):

    if not isinstance(price, (int, float)):
        return "The price should be a number" 
    elif not isinstance(discount, (int, float)):
        return "The discount should be a number"
    elif discount not in range(0, 100):
        return "The discount should be between 0 and 100"
    elif price > 0:
        finalPrice = price - (price * discount / 100)
        return finalPrice
    else:        
        return "The price should be greater than 0"
    
price = float(input("Enter the product price: "))
discount = float(input("Enter the discount percentage: "))
print(applyDiscount(price, discount))

