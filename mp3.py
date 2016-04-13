n = int(raw_input('n>>'))
iterations = int(raw_input('iterations >>'))


x_old = ['0']*(n + 2)
x = ['0']*(n + 2)
if n % 2 == 0:
    x[(n / 2)] = '1'
else:
    x[(n / 2) + 1] = '1'

print ''.join(x[1: n + 1])


"""
rule 30 = 00011110:

111 110 101 100 011 010 001 000
 0   0   0   1   1   1   1   0
"""

for j in range(iterations):
    for l in range(len(x_old)):
        x_old[l] = x[l]
    for i in range(n + 1):
        if i > 0:
            a = x_old[i - 1] == '0' and x_old[i] == '0' and x_old[i + 1] == '1'
            b = x_old[i - 1] == '0' and x_old[i] == '1' and x_old[i + 1] == '0'
            c = x_old[i - 1] == '0' and x_old[i] == '1' and x_old[i + 1] == '1'
            d = x_old[i - 1] == '1' and x_old[i] == '0' and x_old[i + 1] == '0'
            if a or b or c or d:
                x[i] = '1'
            else:
                x[i] = '0'
    x[0] = x[n]
    x[n + 1] = x[1]
    print ''.join(x[1:n+1])
