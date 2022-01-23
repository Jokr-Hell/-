package mystudy;

import java.lang.Math;
import java.util.HashMap;
import java.util.Map;

/**
 * @author jokr_
 */
public class TheSolutionOfEquation {

//  通过a,b,c  计算函数结果
    public Map<String, Double> calculate(double a,double b,double c) {

        double midNo = Math.sqrt(b * b - 4 * a * c);
        double result1 = ((-b)+ midNo)/(2*a);
        double result2 = ((-b)- midNo)/(2*a);

        var map = new HashMap<String, Double>();
        map.put("result1",result1);
        map.put("result2",result2);

        return map;

    }

//  计算a,b,c的值

//  程序入口
    public static void main(String[] args) {
        TheSolutionOfEquation re = new TheSolutionOfEquation();
        var map = re.calculate(1,3,-4);
        System.out.println(map);
    }
}