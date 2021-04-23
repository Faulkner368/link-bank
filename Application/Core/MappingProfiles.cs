using Application.Bookmarks;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Bookmark, Bookmark>();
            CreateMap<Bookmark, BookmarkDto>();

            CreateMap<AppUser, AppUserDto>();
        }
    }
}