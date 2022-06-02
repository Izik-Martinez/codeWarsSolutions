local kata = {}

function kata.nbYear(p0, percent, aug, p)

   c = 0
    while p0 < p do
        p0 = math.floor(p0 * (percent * 0.01 + 1) + aug)
        c = c + 1 end
    return c
end

return kata

