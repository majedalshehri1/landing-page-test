"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github } from "lucide-react";
import { TeamMember } from "@/types";

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
      <CardContent className="p-6 text-center">
        <div className="mb-6">
          <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden bg-white/20 group-hover:scale-110 transition-transform duration-300">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/team/placeholder.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#008ED1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#008ED1] transition-colors duration-300">
          {member.name}
        </h3>

        <Badge className="mb-6 bg-[#008ED1]/30 text-white border-[#008ED1]/50 hover:bg-[#008ED1]/50 transition-colors duration-300">
          {member.role}
        </Badge>

        <div className="flex justify-center space-x-4">
          {member.linkedin && (
            <a
              href={member.linkedin}
              className="p-3 bg-white/10 hover:bg-[#008ED1] rounded-full transition-all duration-300 group/icon hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              className="p-3 bg-white/10 hover:bg-gray-700 rounded-full transition-all duration-300 group/icon hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
