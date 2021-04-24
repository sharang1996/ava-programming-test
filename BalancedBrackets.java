
/* 2. Write a Java function which, when passed a string containing a mixture of bracket characters - i.e. ‘{‘, ‘}’, ‘[‘, ‘]’, ‘(‘ and ‘)’, returns true if the brackets in the string are correctly balanced, and false otherwise. E.g. when called with “{[(())]()}” it should return true, but “{[(()])()}” should return false. Non-bracket characters in the string should be ignored. */

import java.util.*;

public class BalancedBracketsExpression {

	// function to check if brackets are balanced
	static boolean checkBracketsBalanced(String expr)
	{
		Deque<Character> stack
			= new ArrayDeque<Character>();

		for (int i = 0; i < expr.length(); i++)
		{
			char x = expr.charAt(i);

			if (x == '(' || x == '[' || x == '{')
			{
				// Push the element in the stack
				stack.push(x);
				continue;
			}

			// If current character is not opening bracket, then it must be closing. So stack cannot be empty at this point.
			if (stack.isEmpty())
				return false;
			char check;
			switch (x) {
			case ')':
				if (stack.pop() != '(') return false;
				break;
            
            case '}':
				if (stack.pop() != '{') return false;
				break;
            
            case ']':
				if (stack.pop() != '[') return false;
				break;
        }
    }

    // Check Empty Stack
    return (stack.isEmpty());
}

// Driver code
public static void main(String[] args)
{
    String expr = "([{33/4}])";

    // Function call
    if (checkBracketsBalanced(expr))
        System.out.println("Balanced");
    else
        System.out.println("Not Balanced");
}
}