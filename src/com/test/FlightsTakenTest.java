package com.test;

import static org.junit.Assert.*;

import org.junit.Test;

import com.apps.FlightsTaken;

public class FlightsTakenTest {

	FlightsTaken flightsTaken = new FlightsTaken();
	String[] args = {
			"San Francisco - San Francisco"
	};
	
	@Test
	public void testGetFlightSeq(){
		assertTrue(flightsTaken.getFlightSeq(args));
	}
	
}
