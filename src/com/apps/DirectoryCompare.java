package com.apps;

import java.io.File;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

public class DirectoryCompare {

	public static void main(String args[]) {

		if (args.length < 2) {
			System.out.println("Please provide Directory Paths, while running.");
		} else {
			// get the directory name out of the arguments
			File dir1 = new File(args[0]);
			File dir2 = new File(args[1]);

			//get the files in those directories
			File[] files1 = dir1.listFiles();
			File[] files2 = dir2.listFiles();

			//sort the files
			Arrays.sort(files1);
			Arrays.sort(files2);

			//maps to contain: Name of the file as KEY, and file as VALUE
			HashMap<String, File> map1 = new HashMap<>();
			HashMap<String, File> map2 = new HashMap<>();

			for (int i = 0; i < files1.length; i++) {
				map1.put(files1[i].getName(), files1[i]);
			}

			for (int i = 0; i < files2.length; i++) {
				map2.put(files2[i].getName(), files2[i]);
			}

			//get the common keys of the hashmaps in a set
			Set<String> keys1 = new HashSet<String>(map1.keySet());
			Set<String> keys2 = new HashSet<String>(map2.keySet());

			Set<String> commonKeys = new HashSet<String>(keys1);
			commonKeys.retainAll(keys2);

			//finally print the common files and fullpath of files
			for (String key : commonKeys) {
				System.out.println("Found file " + key + " in both directories:");
				System.out.println("- " + map1.get(key).toString());
				System.out.println("- " + map2.get(key).toString());
			}
		}
	}

}
