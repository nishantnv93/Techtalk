        var cost = [ 1300, 2450 ];
        var n = cost.length;
        cost.sort();
        var totalCost = 0;
        for (var i = n - 1; i > 1; i = i-2)
        {
            if (i == 2)
            {
                totalCost = totalCost + cost[2] + cost[0];
            }
            else
            {
                var cost_first = cost[i] + cost[0] + 2 * cost[1];
                var cost_second = cost[i] + cost[i - 1] + 2 * cost[0];
                totalCost += Math.min(cost_first, cost_second);
            }
        }
        if (n == 1)
        {
            totalCost = totalCost + cost[0];
        }
        else
        {
            totalCost = totalCost + cost[1];
        }