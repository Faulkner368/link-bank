using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Bookmarks.Any()) return;
            
            var bookmarks = new List<Bookmark>
            {
                new Bookmark
                {
                    Title = "Google",
                    Description = "Google...",
                    Url = "https://google.co.uk",
                    Tags = "search engine",
                    DateCreated = DateTime.Now.AddMonths(-2)
                },
                new Bookmark
                {
                    Title = "Facebook",
                    Description = "Facebook...",
                    Url = "https://facebook.com",
                    Tags = "social media",
                    DateCreated = DateTime.Now.AddMonths(-1)
                },
                new Bookmark
                {   
                    Title = "Twitter",
                    Description = "Twitter...",
                    Url = "https://twitter.com",
                    Tags = "social media",
                    DateCreated = DateTime.Now.AddMonths(1)
                },
                new Bookmark
                {
                    Title = "BBC News",
                    Description = "BBC news...",
                    Url = "https://bbc.co.uk/news",
                    Tags = "news",
                    DateCreated = DateTime.Now.AddMonths(2)
                },
                new Bookmark
                {
                    Title = "LinkedIn",
                    Description = "LinkedIn...",
                    Url = "https://linkedin.com",
                    Tags = "social media",
                    DateCreated = DateTime.Now.AddMonths(3)
                },
                new Bookmark
                {
                    Title = "Amazon",
                    Description = "Amazon...",
                    Url = "https://amazon.co.uk",
                    Tags = "general shop",
                    DateCreated = DateTime.Now.AddMonths(4)
                },
                new Bookmark
                {
                    Title = "Ebay",
                    Description = "Ebay...",
                    Url = "https://ebay.com",
                    Tags = "auction",
                    DateCreated = DateTime.Now.AddMonths(5)
                },
                new Bookmark
                {
                    Title = "Indeed",
                    Description = "Indeed...",
                    Url = "https://indeed.co.uk",
                    Tags = "jobs",
                    DateCreated = DateTime.Now.AddMonths(6)
                },
                new Bookmark
                {
                    Title = "Udemy",
                    Description = "Udemy...",
                    Url = "https://udemy.com",
                    Tags = "course",
                    DateCreated = DateTime.Now.AddMonths(7)
                },
                new Bookmark
                {
                    Title = "Met Office",
                    Description = "Met Office weather...",
                    Url = "https://metoffice.co.uk",
                    Tags = "weather",
                    DateCreated = DateTime.Now.AddMonths(8)
                }
            };

            await context.Bookmarks.AddRangeAsync(bookmarks);
            await context.SaveChangesAsync();
        }
    }
}