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
                },
                new Bookmark
                {
                    Title = "Ordnance Survey Map",
                    Description = "OS map of all of UK...",
                    Url = "http://live.opentracking.co.uk/ultragb16/",
                    Tags = "map",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Nuke Map",
                    Description = "Shows blast and fallout radius of various nuclear warheads...",
                    Url = "https://nuclearsecrecy.com/nukemap/",
                    Tags = "nuclear",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Fallout 4 Map",
                    Description = "Fallout 4 map...",
                    Url = "http://www.fallout4map.com/",
                    Tags = "fallout game",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Initializr",
                    Description = "Initializr...",
                    Url = "http://www.initializr.com/",
                    Tags = "frontend",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Gw4dwn",
                    Description = "Gw4dwn...",
                    Url = "https://gw4dwn.com/dmr-south-wales-gb7cw/",
                    Tags = "ham radio",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Repeater Book",
                    Description = "Repeater book...",
                    Url = "https://www.repeaterbook.com/row_repeaters/details.php?state_id=gb&id=8590",
                    Tags = "ham radio",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Radio Reference UK",
                    Description = "Radio reference uk...",
                    Url = "https://radioreferenceuk.co.uk/frequencies.php?town=merthyr+tydfil",
                    Tags = "ham radio",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Github - GitExtensions",
                    Description = "Github, git extensions, GUI for version control...",
                    Url = "https://github.com/gitextensions/gitextensions/releases/download/v3.4.3/gitextensions-3.4.3.9999-d4b0f48bb.msi",
                    Tags = "source control",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "NetWeather",
                    Description = "Netweather SSW...",
                    Url = "https://www.netweather.tv/forum/topic/88772-stratosphere-and-polar-vortex-watch/page/155/",
                    Tags = "weather",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Github - Trape",
                    Description = "Github, trape app...",
                    Url = "https://github.com/jofpin/trape?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more",
                    Tags = "trape app",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Github - Photon",
                    Description = "Github, photon app...",
                    Url = "https://github.com/s0md3v/photon?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more",
                    Tags = "photon app",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Netlify",
                    Description = "Netlify hosting provider...",
                    Url = "https://www.netlify.com",
                    Tags = "netlify",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Vuetifyjs",
                    Description = "Vuetifyjs, html components like Bootstrap...",
                    Url = "https://dev.vuetifyjs.com/en/components/",
                    Tags = "vuetify",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Pi hole",
                    Description = "Pi hole local DNS resolver for improved privacy...",
                    Url = "https://pi-hole.net/",
                    Tags = "dns",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "1.1.1.1",
                    Description = "1.1.1.1, more private DNS provider...",
                    Url = "https://1.1.1.1/",
                    Tags = "dns",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Open Democracy",
                    Description = "Open democracy news...",
                    Url = "https://www.opendemocracy.net/en/feed/",
                    Tags = "news",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Natural Resources Wales",
                    Description = "Natural resources wales, local river levels station telemetry...",
                    Url = "https://rivers-and-seas.naturalresources.wales/station/4064?parametertype=1",
                    Tags = "river levels",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Natural Resources Wales",
                    Description = "Natural resources wales...",
                    Url = "https://rivers-and-seas.naturalresources.wales/graph/getdata?parameterid=147&from=2020-12-01t00%3a00%3a00.000z&to=2021-01-01t00%3a00%3a00.000z",
                    Tags = "river levels",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Flex Box Froggy",
                    Description = "Flex box froggy css flex lessons...",
                    Url = "https://flexboxfroggy.com/",
                    Tags = "css",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "CD Keys",
                    Description = "Cd keys for buying games...",
                    Url = "https://www.cdkeys.com/pc/",
                    Tags = "pc games",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Martin Fowler",
                    Description = "Martin Fowler architecture...",
                    Url = "https://martinfowler.com/architecture/",
                    Tags = "coding practices",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Martin Fowler",
                    Description = "Martin Fowler collection pipeline...",
                    Url = "https://martinfowler.com/articles/collection-pipeline/",
                    Tags = "coding practices",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Pragmatic Programmer",
                    Description = "Pragmatic programmer...",
                    Url = "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/",
                    Tags = "coding practices",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Tiangolo",
                    Description = "Tiangolo...",
                    Url = "https://fastapi.tiangolo.com/",
                    Tags = "open source",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Tutorialspoint",
                    Description = "Tutorialspoint...",
                    Url = "https://www.tutorialspoint.com/design_pattern/factory_pattern.htm",
                    Tags = "lessons",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                },
                new Bookmark
                {
                    Title = "Wikipedia Q Codes",
                    Description = "Wikipedia article about Ham Radio Q codes...",
                    Url = "https://en.wikipedia.org/wiki/q_code",
                    Tags = "ham radio",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    Owner = owner
                }
            };

            await context.Bookmarks.AddRangeAsync(bookmarks);
            await context.SaveChangesAsync();
        }
    }
}