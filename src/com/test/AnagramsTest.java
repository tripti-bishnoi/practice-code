package com.test;

import static org.junit.Assert.*;

import java.util.Scanner;

import org.junit.Test;

import com.apps.Anagrams;

public class AnagramsTest {

	Anagrams anagrams = new Anagrams();

	String args[] = null;

	@Test
	public void testCheckAnagrams() {
		do {
			args = takeUserInput().split(",");
			assertTrue(anagrams.checkAnagrams(args));
		} while (args.length > 1);
	}

	public String takeUserInput() {
		Scanner input = new Scanner(System.in);
		System.out.println("Please provide Strings to compare.");

		return input.nextLine();
	}
}
