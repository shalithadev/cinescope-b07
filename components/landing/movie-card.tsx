"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { MovieData } from "@/lib/types";
import { Badge } from "../ui/badge";
import Image from "next/image";

interface MovieCardProps {
  movie: MovieData;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card className="border-primary/20 hover:border-primary/50 overflow-hidden py-0 gap-0 transition-colors">
      <div className="aspect-2/3 w-full overflow-hidden">
        <Image
          src={movie.poster}
          alt={movie.title}
          width={300}
          height={450}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="line-clamp-1 font-semibold text-base">{movie.title}</h3>

        <p className="text-muted-foreground text-sm">
          {movie.year} • {movie.runtime} min
        </p>

        <div className="mt-2 flex flex-wrap gap-1">
          {movie.genres.slice(0, 2).map((genre, index) => (
            <Badge
              key={`${genre}-${index}`}
              variant="outline"
              className="border-primary/30 bg-primary/5 text-xs rounded-sm"
            >
              {genre}
            </Badge>
          ))}

          {movie.genres.length > 2 && (
            <Badge
              variant="outline"
              className="border-primary/30 text-xs rounded-sm"
            >
              +{movie.genres.length - 2}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <div>
          <span></span>
        </div>

        <Button>Details</Button>
      </CardFooter>
    </Card>
  );
}
