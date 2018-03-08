package com.apps;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

public class FlightsTaken {

	public boolean getFlightSeq(String args[]) {

		if (args.length < 1) {
			System.out.print("Please provide details of Flights, while running, ");
			System.out.println("as strings: <departing city> - <destination city> eg. 'San Francisco -  Las Vegas'");
			return false;
		} else {
			List<FlightList> list = new ArrayList<>();

			for (int i = 0; i < args.length; i++) {
				String[] arr = args[i].split("-");
				list.add(new FlightList(arr[0].trim(), arr[1].trim()));
			}

			List<FlightList> output = new ArrayList<>();

			// logic to get the first DEPARTING CITY
			String dept = list.get(0).departingCity;
			HashSet<String> citiesCovered = new HashSet<>();// hashset to avoid
															// cycle
			int index = 0;
			int j = 0;
			while (j < list.size()) {
				if (dept.equals(list.get(j).destinationCity)) {
					if (citiesCovered.contains(dept)) {
						break;
					} else {
						citiesCovered.add(dept);
						dept = list.get(j).departingCity;
						index = j;
						j = 0;
					}
				} else
					j++;
			}

			// logic to fill the output list with the sequence of flights taken
			output.add(list.get(index));
			dept = list.get(index).destinationCity;
			list.remove(index);
			for (int i = 0; i < list.size();) {
				if (dept.equals(list.get(i).departingCity)) {
					output.add(list.get(i));
					dept = list.get(i).destinationCity;
					list.remove(i);
					i = 0;
				} else {
					i++;
				}
			}

			// print the sequence of flights taken
			for (int i = 0; i < output.size(); i++) {
				System.out.println(output.get(i).departingCity + " - " + output.get(i).destinationCity);
			}
			return true;
		}
	}

}

class FlightList {
	String departingCity;
	String destinationCity;

	public FlightList(String departingCity, String destinationCity) {
		this.departingCity = departingCity;
		this.destinationCity = destinationCity;
	}

}