
const examType = { utme: true, wassce: false };

const selectParam = [
  {
    subject: "english",
    examType,
    yearQuestion: [
      { questions: 100, examyear: "2000" },
      { questions: 100, examyear: "2001" },
      { questions: 100, examyear: "2002" },
      { questions: 75, examyear: "2003" },
      { questions: 75, examyear: "2004" },
      { questions: 72, examyear: "2005" },
      { questions: 75, examyear: "2006" },
      { questions: 75, examyear: "2007" },
      { questions: 75, examyear: "2008" },
      { questions: 74, examyear: "2009" },
      { questions: 75, examyear: "2010" },
      { questions: 99, examyear: "2011" },
      { questions: 99, examyear: "2012" },
      { questions: 98, examyear: "2013" },
      { questions: 84, examyear: "2014" },
      { questions: 72, examyear: "2015" },
      { questions: 75, examyear: "2016" },
      { questions: 49, examyear: "2017" },
      { questions: 80, examyear: "2018" },
      { questions: 110, examyear: "2019" },
      { questions: 60, examyear: "2020" },
      { questions: 60, examyear: "2021" },
      { questions: 60, examyear: "2022" },
    ],
  },
  {
    subject: "commerce",
    examType,
    yearQuestion: [
      { questions: 48, examyear: "1990" },
      { questions: 97, examyear: "2000" },
      { questions: 48, examyear: "2001" },
      { questions: 50, examyear: "2002" },
      { questions: 48, examyear: "2003" },
      { questions: 50, examyear: "2004" },
      { questions: 50, examyear: "2005" },
      { questions: 47, examyear: "2006" },
      { questions: 48, examyear: "2007" },
      { questions: 50, examyear: "2008" },
      { questions: 48, examyear: "2009" },
      { questions: 49, examyear: "2010" },
      { questions: 48, examyear: "2011" },
      { questions: 49, examyear: "2012" },
      { questions: 108, examyear: "2013" },
      { questions: 48, examyear: "2016" },
    ],
  },
  {
    subject: "biology",
    examType,
    yearQuestion: [
      { questions: 42, examyear: "2003" },
      { questions: 40, examyear: "2004" },
      { questions: 38, examyear: "2005" },
      { questions: 32, examyear: "2006" },
      { questions: 34, examyear: "2007" },
      { questions: 36, examyear: "2008" },
      { questions: 39, examyear: "2009" },
      { questions: 40, examyear: "2010" },
      { questions: 44, examyear: "2011" },
      { questions: 39, examyear: "2012" },
    ],
  },
  {
    subject: "chemistry",
    examType,
    yearQuestion: [
      { questions: 44, examyear: "2001" },
      { questions: 30, examyear: "2002" },
      { questions: 48, examyear: "2003" },
      { questions: 46, examyear: "2004" },
      { questions: 47, examyear: "2005" },
      { questions: 45, examyear: "2006" },
      { questions: 44, examyear: "2010" },
    ],
  },
  {
    subject: "mathematics",
    examType,
    yearQuestion: [
      { questions: 37, examyear: "2000" },
      { questions: 50, examyear: "2001" },
      { questions: 50, examyear: "2002" },
      { questions: 50, examyear: "2003" },
      { questions: 50, examyear: "2004" },
      { questions: 50, examyear: "2005" },
      { questions: 66, examyear: "2006" },
      { questions: 64, examyear: "2007" },
      { questions: 68, examyear: "2008" },
      { questions: 67, examyear: "2009" },
      { questions: 49, examyear: "2010" },
      { questions: 48, examyear: "2011" },
      { questions: 49, examyear: "2012" },
      { questions: 56, examyear: "2013" },
      { questions: 49, examyear: "2014" },
      { questions: 50, examyear: "2015" },
      { questions: 50, examyear: "2016" },
      { questions: 48, examyear: "2017" },
      { questions: 50, examyear: "2018" },
      { questions: 49, examyear: "2019" },
      { questions: 40, examyear: "utme" },
      { questions: 40, examyear: "2021" },
      { questions: 39, examyear: "2022" },
      { questions: 50, examyear: "2023" },
    ],
  },
  {
    subject: "accounting",
    examType,
    yearQuestion: [
      { questions: 90, examyear: "1997" },
      { questions: 16, examyear: "1998" },
      { questions: 50, examyear: "1999" },
      { questions: 49, examyear: "2000" },
      { questions: 50, examyear: "2001" },
      { questions: 50, examyear: "2002" },
      { questions: 50, examyear: "2003" },
      { questions: 92, examyear: "2004" },
      { questions: 50, examyear: "2005" },
      { questions: 45, examyear: "2006" },
      { questions: 42, examyear: "2007" },
      { questions: 50, examyear: "2008" },
      { questions: 39, examyear: "2009" },
      { questions: 24, examyear: "2010" },
      { questions: 16, examyear: "2011" },
      { questions: 68, examyear: "2012" },
      { questions: 64, examyear: "2013" },
      { questions: 47, examyear: "2014" },
      { questions: 92, examyear: "2015" },
      { questions: 95, examyear: "2016" },
      { questions: 50, examyear: "2017" },
      { questions: 50, examyear: "2018" },
      { questions: 50, examyear: "2019" },
      { questions: 40, examyear: "2020" },
      { questions: 40, examyear: "2021" },
      { questions: 40, examyear: "2022" },
      { questions: 40, examyear: "2023" },
      { questions: 40, examyear: "2024" },
    ],
  },
  {
    subject: "physics",
    examType,
    yearQuestion: [
      {
        questions: 18,
        examyear: "2006",
      },
      {
        questions: 24,
        examyear: "2007",
      },
      {
        questions: 24,
        examyear: "2009",
      },
      {
        questions: 25,
        examyear: "2010",
      },
      {
        questions: 21,
        examyear: "2011",
      },
      {
        questions: 17,
        examyear: "2012",
      },
    ],
  },
  {
    subject: "englishlit",
    examType,
    yearQuestion: [
      {
        questions: 23,
        examyear: "2006",
      },
      {
        questions: 24,
        examyear: "2007",
      },
      {
        questions: 77,
        examyear: "2008",
      },
      {
        questions: 75,
        examyear: "2009",
      },
      {
        questions: 62,
        examyear: "2010",
      },
      {
        questions: 25,
        examyear: "2012",
      },
      {
        questions: 25,
        examyear: "2013",
      },
      {
        questions: 50,
        examyear: "2015",
      },
      {
        questions: 40,
        examyear: "2016",
      },
      {
        questions: 40,
        examyear: "2017",
      },
      {
        questions: 40,
        examyear: "2018",
      },
      {
        questions: 40,
        examyear: "2019",
      },
      {
        questions: 40,
        examyear: "2020",
      },
    ],
  },
  {
    subject: "government",
    examType,
    yearQuestion: [
      {
        questions: 22,
        examyear: "2006",
      },
      {
        questions: 24,
        examyear: "2007",
      },
      {
        questions: 77,
        examyear: "2008",
      },
      {
        questions: 75,
        examyear: "2009",
      },
      {
        questions: 74,
        examyear: "2010",
      },
      {
        questions: 25,
        examyear: "2011",
      },
      {
        questions: 74,
        examyear: "2012",
      },
      {
        questions: 133,
        examyear: "2013",
      },
      {
        questions: 50,
        examyear: "2000",
      },
      {
        questions: 50,
        examyear: "1999",
      },
      {
        questions: 50,
        examyear: "2016",
      },
      {
        questions: 49,
        examyear: "2014",
      },
      {
        questions: 60,
        examyear: "1988",
      },
      {
        questions: 60,
        examyear: "1989",
      },
      {
        questions: 50,
        examyear: "2017",
      },
      {
        questions: 50,
        examyear: "2018",
      },
      {
        questions: 50,
        examyear: "2019",
      },
      {
        questions: 40,
        examyear: "2020",
      },
      {
        questions: 40,
        examyear: "2021",
      },
      {
        questions: 40,
        examyear: "2022",
      },
      {
        questions: 50,
        examyear: "2023",
      },
      {
        questions: 50,
        examyear: "2024",
      },
      {
        questions: 50,
        examyear: "2001",
      },
      {
        questions: 50,
        examyear: "2002",
      },
      {
        questions: 50,
        examyear: "2003",
      },
      {
        questions: 50,
        examyear: "2004",
      },
      {
        questions: 50,
        examyear: "2005",
      },
      {
        questions: 50,
        examyear: "2015",
      },
    ],
  },
  {
    subject: "crk",
    examType,
    yearQuestion: [
      {
        questions: 23,
        examyear: "2006",
      },
      {
        questions: 24,
        examyear: "2007",
      },
      {
        questions: 76,
        examyear: "2008",
      },
      {
        questions: 124,
        examyear: "2009",
      },
      {
        questions: 175,
        examyear: "2010",
      },
      {
        questions: 225,
        examyear: "2011",
      },
      {
        questions: 75,
        examyear: "2012",
      },
      {
        questions: 123,
        examyear: "2013",
      },
      {
        questions: 50,
        examyear: "2005",
      },
      {
        questions: 100,
        examyear: "2015",
      },
      {
        questions: 94,
        examyear: "2019",
      },
    ],
  },
  {
    subject: "geography",
    examType,
    yearQuestion: [
      {
        questions: 23,
        examyear: "2006",
      },
      {
        questions: 23,
        examyear: "2007",
      },
      {
        questions: 27,
        examyear: "2008",
      },
      {
        questions: 14,
        examyear: "2009",
      },
      {
        questions: 25,
        examyear: "2010",
      },
      {
        questions: 25,
        examyear: "2011",
      },
      {
        questions: 24,
        examyear: "2012",
      },
      {
        questions: 25,
        examyear: "2013",
      },
      {
        questions: 50,
        examyear: "2014",
      },
      {
        questions: 40,
        examyear: "2016",
      },
      {
        questions: 40,
        examyear: "2017",
      },
      {
        questions: 40,
        examyear: "2018",
      },
      {
        questions: 40,
        examyear: "2019",
      },
      {
        questions: 40,
        examyear: "2020",
      },
    ],
  },
  {
    subject: "economics",
    examType,
    yearQuestion: [
      {
        questions: 72,
        examyear: "2006",
      },
      {
        questions: 73,
        examyear: "2007",
      },
      {
        questions: 25,
        examyear: "2008",
      },
      {
        questions: 75,
        examyear: "2009",
      },
      {
        questions: 15,
        examyear: "2011",
      },
      {
        questions: 70,
        examyear: "2012",
      },
      {
        questions: 25,
        examyear: "2013",
      },
      {
        questions: 111,
        examyear: "2010",
      },
      {
        questions: 46,
        examyear: "2001",
      },
      {
        questions: 50,
        examyear: "2003",
      },
      {
        questions: 46,
        examyear: "2004",
      },
      {
        questions: 49,
        examyear: "2005",
      },
    ],
  },
  {
    subject: "irk",
    examType,
    yearQuestion: [
      {
        questions: 30,
        examyear: "2012",
      },
    ],
  },
  {
    subject: "civiledu",
    examType,
    yearQuestion: [
      {
        questions: 96,
        examyear: "2014",
      },
      {
        questions: 99,
        examyear: "2012",
      },
      {
        questions: 99,
        examyear: "2013",
      },
      {
        questions: 48,
        examyear: "2011",
      },
      {
        questions: 46,
        examyear: "2016",
      },
      {
        questions: 48,
        examyear: "2015",
      },
    ],
  },
  {
    subject: "insurance",
    examType,
    yearQuestion: [
      {
        questions: 50,
        examyear: "2014",
      },
      {
        questions: 50,
        examyear: "1",
      },
      {
        questions: 50,
        examyear: "2",
      },
      {
        questions: 50,
        examyear: "3",
      },
      {
        questions: 50,
        examyear: "4",
      },
      {
        questions: 50,
        examyear: "5",
      },
      {
        questions: 50,
        examyear: "2015",
      },
    ],
  },
  {
    subject: "currentaffairs",
    examType,
    yearQuestion: [
      {
        questions: 44,
        examyear: "2013",
      },
    ],
  },
  {
    subject: "history",
    examType,
    yearQuestion: [
      {
        questions: 50,
        examyear: "2013",
      },
    ],
  },
];

const sortBasedOnSub = selectParam.sort((a, b) =>
  a.subject.localeCompare(b.subject, "en-US")
);

function examYearComparator(a, b) {
  const na = Number(a.examyear);
  const nb = Number(b.examyear);
  const aIsNum = !Number.isNaN(na);
  const bIsNum = !Number.isNaN(nb);

  if (aIsNum && bIsNum) return na - nb;
  if (aIsNum && !bIsNum) return -1;
  if (!aIsNum && bIsNum) return 1;
  return String(a.examyear).localeCompare(String(b.examyear), "en-US");
}
const availableData = sortBasedOnSub.map((data) => ({
  id: crypto.randomUUID(),
  subject: data.subject,
  examType: { utme: false, wassce: false },
  yearQuestion: data.yearQuestion.sort(examYearComparator),
}));

export default availableData;
