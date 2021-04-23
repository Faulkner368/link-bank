using System;

namespace Domain
{
    public class Bookmark
    {
        public Guid Id { get; set; }
        public string Title { get; set; }

        public string Description { get; set; }

        public string Url { get; set; }

        public DateTime DateCreated { get; set; }

        public string Tags { get; set; }
        public AppUser Owner { get; set; }
    }
}