import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Achievement {
  title: string;
  date: string;
  badgeLink: string;
  imageUrl: string;
}

interface AchievementsTimelineProps {
  achievements?: Achievement[];
}

const defaultAchievements: Achievement[] = [
  {
    title: "Advanced Kubernetes Operators",
    date: "April 15, 2025",
    badgeLink:
      "https://www.credly.com/badges/4778a733-6a28-4ca2-b5de-794c8292afbd/public_url",
    imageUrl: "https://i.imgur.com/ZPqjqKv.jpg",
  },
  {
    title: "Cloud Essentials",
    date: "February 20, 2025",
    badgeLink:
      "https://www.credly.com/badges/900b95c6-1586-4d71-bd96-924770514326/public_url",
    imageUrl: "https://imgur.com/TwTjJuT.jpg",
  },
  {
    title: "AWS Cloud Quest: Cloud Practitioner Badge",
    date: "December 19, 2024",
    badgeLink: "#",
    imageUrl: "https://imgur.com/2yW8Rjc.jpg",
  },
  {
    title: "Artificial Intelligence",
    date: "April, 2025",
    badgeLink: "https://ude.my/UC-024c27ea-fb56-496c-910a-c4fe140426b2",
    imageUrl: "https://imgur.com/zGwdCtr.jpg",
  },
];

const AchievementsTimeline: React.FC<AchievementsTimelineProps> = ({
  achievements = defaultAchievements,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-background p-6 rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-2">Achievements</h2>
      <p className="text-muted-foreground text-center mb-10">
        My professional certifications journey
      </p>

      <div className="relative">
        {/* Timeline connector line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 rounded-full"></div>

        {/* Timeline items */}
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative mb-12 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            {/* Timeline item content */}
            <div className="w-1/2 px-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start p-4">
                    <div className="mr-4 flex-shrink-0 h-16 w-16 rounded-md overflow-hidden">
                      <img
                        src={achievement.imageUrl}
                        alt={achievement.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {achievement.date}
                      </p>
                      <a
                        href={achievement.badgeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1 hover:bg-primary/10 transition-colors"
                        >
                          View Badge <ExternalLink className="h-3 w-3 ml-1" />
                        </Badge>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Timeline dot */}
            <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsTimeline;
