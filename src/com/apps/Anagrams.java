package com.apps;

import java.util.HashMap;

public class Anagrams {

	public boolean checkAnagrams(String args[]) {

		if (args.length < 2) {
			System.out.println("Please provide Strings to compare, while running.");
			return false;
		} else {
			// get the strings out of the arguments
			String input1 = args[0];
			String input2 = args[1];

			// create hashmap that contains:
			// KEY: characters in the string
			// VALUE: count of the character
			HashMap<Character, Integer> hash1 = new HashMap<>();
			HashMap<Character, Integer> hash2 = new HashMap<>();

			fillMap(hash1, input1.toLowerCase());
			fillMap(hash2, input2.toLowerCase());

			// compare the two hashmaps to check of entrySets are matching
			if (hash1.entrySet().equals(hash2.entrySet())) {
				System.out.println("True: " + input1 + " and " + input2 + " are anagrams of each other.");
				return true;
			} else {
				System.out.println("False: " + input1 + " and " + input2 + " are not anagrams of each other.");
				return false;
			}
		}
	}

	/*
	 * fillMap: Fills the hasmaps with KEY and VALUE, to keep the character in
	 * the string and their count
	 */
	void fillMap(HashMap<Character, Integer> hash, String s) {
		int len = s.length();

		for (int i = 0; i < len; i++) {
			if (s.charAt(i) != ' ') {
				hash.put(s.charAt(i), hash.get(s.charAt(i)) == null ? 1 : hash.get(s.charAt(i)) + 1);
			}
		}
	}
}
