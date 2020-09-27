function vacation(group, type, day) {
    let price = 0;
    let single = 0;
    if (type == 'Students') {
        if (day == 'Friday') {
            price += group * 8.45
        }
        else if (day == 'Saturday') {
            price += group * 9.80
        }
        else if (day == 'Sunday') {
            price += group * 10.46
        }
    }
    else if (type == 'Business') {
        if (day == 'Friday') {
            single += 10.90
        }
        else if (day == 'Saturday') {
            single += 15.60
        }
        else if (day == 'Sunday') {
            single += 16.00
        }
    }

    else if (type == 'Regular') {
        if (day == 'Friday') {
            price += group * 15.00
        }
        else if (day == 'Saturday') {
            price += group * 20.00
        }
        else if (day == 'Sunday') {
            price += group * 22.50
        }
    }
    if (group >= 30 && type == 'Students') {
        price *= 0.85
    }
    if (group >= 100 && type == 'Business') {
        price += ((group - 10) * single)
    }
    else {price += (single*group)}
    if (group >= 10 && group <= 20 && type == 'Regular') {
        price *= 0.95
    }
    
    console.log(`Total price: ${price.toFixed(2)}`)

}
vacation(50, 'Business', 'Saturday')