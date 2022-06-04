local function isnarcissistic(n)
    local l = math.floor(math.log10(n) + 1)
    local m, s = n, 0
    while m > 0 do
      s = s + (m % 10) ^ l
      m = m // 10
    end
    return s == n
  end
  
  return isnarcissistic