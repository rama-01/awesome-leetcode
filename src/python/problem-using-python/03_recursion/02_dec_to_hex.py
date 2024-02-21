def dec_to_base(n, base):
    convert_str = '0123456789ABCDEF'
    if n < base:
        return convert_str[n]
    else:
        return dec_to_base(n // base, base) + convert_str[n % base]


print(dec_to_base(1453, 16))
