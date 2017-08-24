#/usr/bin/perl

use utf8;
use strict;

binmode STDIN, ":utf8";
binmode STDOUT, ":utf8";

my $LEN = 72;

## wrap lines to fit in $LEN columns
while(<STDIN>) {
    chomp; chomp;
    my @chars = split("");
    my $l = 0;
    my $t = "";
    foreach my $c (@chars) {
	my $w;
	if(utf8::downgrade($c, 1)) {
	    $w = 1;
	    $w = 8 if ($c =~ /\t/); # count a TAB char as 8 width
	} else {
	    $w = 2;
	}
	if ($l > $LEN) {
	    print "$t\n";
	    $t = "";
	    $l = 0;
	}
	$l += $w;
	$t .= $c;
    }
    print "$t\n";
}
