interface MajorCredits {
    credits: number;
    brand: "major";
}
interface MinorCredits {
    credits: number;
    brand: "minor";
}
declare function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits;
declare function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits;


