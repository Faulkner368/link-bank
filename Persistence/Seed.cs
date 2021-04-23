using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser{ DisplayName = "Bob", UserName = "bob", Email = "bob@test.com" },
                    new AppUser{ DisplayName = "Tom", UserName = "tom", Email = "tom@test.com" },
                    new AppUser{ DisplayName = "Jane", UserName = "jane", Email = "jane@test.com" },
                };

                users.ForEach(async user => await userManager.CreateAsync(user, "Test123_"));
            }

            if (context.Bookmarks.Any()) return;

            var owner = await userManager.FindByEmailAsync("bob@test.com");

            var bookmarks = new List<Bookmark>
            {
                new Bookmark
                {
                    Title = "Google",
                    Description = "Google...",
                    Url = "https://google.co.uk",
                    Tags = "search engine",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Facebook",
                    Description = "Facebook...",
                    Url = "https://facebook.com",
                    Tags = "social media",
                    DateCreated = DateTime.Now.AddMonths(-1),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Twitter",
                    Description = "Twitter...",
                    Url = "https://twitter.com",
                    Tags = "social media",
                    DateCreated = DateTime.Now.AddMonths(1),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "BBC News",
                    Description = "BBC news...",
                    Url = "https://bbc.co.uk/news",
                    Tags = "news",
                    DateCreated = DateTime.Now.AddMonths(2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "LinkedIn",
                    Description = "LinkedIn...",
                    Url = "https://linkedin.com",
                    Tags = "social media",
                    DateCreated = DateTime.Now.AddMonths(3),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Amazon",
                    Description = "Amazon...",
                    Url = "https://amazon.co.uk",
                    Tags = "general shop",
                    DateCreated = DateTime.Now.AddMonths(4),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Ebay",
                    Description = "Ebay...",
                    Url = "https://ebay.com",
                    Tags = "auction",
                    DateCreated = DateTime.Now.AddMonths(5),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Indeed",
                    Description = "Indeed...",
                    Url = "https://indeed.co.uk",
                    Tags = "jobs",
                    DateCreated = DateTime.Now.AddMonths(6),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Udemy",
                    Description = "Udemy...",
                    Url = "https://udemy.com",
                    Tags = "course",
                    DateCreated = DateTime.Now.AddMonths(7),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Met Office",
                    Description = "Met Office weather...",
                    Url = "https://metoffice.co.uk",
                    Tags = "weather",
                    DateCreated = DateTime.Now.AddMonths(8),
                    Owner = owner
                }
            };

            await context.Bookmarks.AddRangeAsync(bookmarks);
            await context.SaveChangesAsync();
        }
    }
}