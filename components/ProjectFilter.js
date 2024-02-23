"use client";
import React, { useEffect } from "react";
import { projects } from "@/app/constants/projects";

function ProjectFilter({ activeCategory, setActiveCategory, setFiltered }) {
  useEffect(() => {
    if (activeCategory === "all") {
      setFiltered(projects);
      return;
    }

    const filtered = projects.filter((project) =>
      project.category.includes(activeCategory)
    );
    setFiltered(filtered);
  }, [activeCategory, setFiltered]);

  return (
    <div className="flex gap-5 my-10">
      <button
        className={
          activeCategory == "all"
            ? "bg-darkblue py1 px-3 text-white rounded-lg"
            : null
        }
        onClick={() => setActiveCategory("all")}
      >
        全て
      </button>
      <button
        className={
          activeCategory == "info"
            ? "bg-darkblue py1 px-3 text-white rounded-lg"
            : null
        }
        onClick={() => setActiveCategory("info")}
      >
        記事
      </button>
      <button
        className={
          activeCategory == "goods"
            ? "bg-darkblue py1 px-3 text-white rounded-lg"
            : null
        }
        onClick={() => setActiveCategory("goods")}
      >
        おすすめ登山グッズ
      </button>
    </div>
  );
}

export default ProjectFilter;
