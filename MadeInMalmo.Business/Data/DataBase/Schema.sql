USE [master]
GO

/****** Object:  Database [MadeInMalmo]    Script Date: 06/11/2015 20:43:50 ******/
IF  EXISTS (SELECT name FROM sys.databases WHERE name = N'MadeInMalmo')
DROP DATABASE [MadeInMalmo]
GO

USE [master]
GO

/****** Object:  Database [MadeInMalmo]    Script Date: 06/11/2015 21:38:25 ******/
CREATE DATABASE [MadeInMalmo] 
--ON  PRIMARY 
--( NAME = N'MadeInMalmo', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL10_50.MSSQLSERVER\MSSQL\DATA\MadeInMalmo.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
-- LOG ON 
--( NAME = N'MadeInMalmo_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL10_50.MSSQLSERVER\MSSQL\DATA\MadeInMalmo_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
--ALTER DATABASE [MadeInMalmo] SET COMPATIBILITY_LEVEL = 100
--GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MadeInMalmo].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MadeInMalmo] SET ANSI_NULL_DEFAULT OFF
GO
ALTER DATABASE [MadeInMalmo] SET ANSI_NULLS OFF
GO
ALTER DATABASE [MadeInMalmo] SET ANSI_PADDING OFF
GO
ALTER DATABASE [MadeInMalmo] SET ANSI_WARNINGS OFF
GO
ALTER DATABASE [MadeInMalmo] SET ARITHABORT OFF
GO
ALTER DATABASE [MadeInMalmo] SET AUTO_CLOSE OFF
GO
ALTER DATABASE [MadeInMalmo] SET AUTO_CREATE_STATISTICS ON
GO
ALTER DATABASE [MadeInMalmo] SET AUTO_SHRINK OFF
GO
ALTER DATABASE [MadeInMalmo] SET AUTO_UPDATE_STATISTICS ON
GO
ALTER DATABASE [MadeInMalmo] SET CURSOR_CLOSE_ON_COMMIT OFF
GO
ALTER DATABASE [MadeInMalmo] SET CURSOR_DEFAULT  GLOBAL
GO
ALTER DATABASE [MadeInMalmo] SET CONCAT_NULL_YIELDS_NULL OFF
GO
ALTER DATABASE [MadeInMalmo] SET NUMERIC_ROUNDABORT OFF
GO
ALTER DATABASE [MadeInMalmo] SET QUOTED_IDENTIFIER OFF
GO
ALTER DATABASE [MadeInMalmo] SET RECURSIVE_TRIGGERS OFF
GO
ALTER DATABASE [MadeInMalmo] SET  DISABLE_BROKER
GO
ALTER DATABASE [MadeInMalmo] SET AUTO_UPDATE_STATISTICS_ASYNC OFF
GO
ALTER DATABASE [MadeInMalmo] SET DATE_CORRELATION_OPTIMIZATION OFF
GO
ALTER DATABASE [MadeInMalmo] SET TRUSTWORTHY OFF
GO
ALTER DATABASE [MadeInMalmo] SET ALLOW_SNAPSHOT_ISOLATION OFF
GO
ALTER DATABASE [MadeInMalmo] SET PARAMETERIZATION SIMPLE
GO
ALTER DATABASE [MadeInMalmo] SET READ_COMMITTED_SNAPSHOT OFF
GO
ALTER DATABASE [MadeInMalmo] SET HONOR_BROKER_PRIORITY OFF
GO
ALTER DATABASE [MadeInMalmo] SET  READ_WRITE
GO
ALTER DATABASE [MadeInMalmo] SET RECOVERY SIMPLE
GO
ALTER DATABASE [MadeInMalmo] SET  MULTI_USER
GO
ALTER DATABASE [MadeInMalmo] SET PAGE_VERIFY CHECKSUM
GO
ALTER DATABASE [MadeInMalmo] SET DB_CHAINING OFF
GO
EXEC sys.sp_db_vardecimal_storage_format N'MadeInMalmo', N'ON'
GO
USE [MadeInMalmo]
GO
/****** Object:  Table [dbo].[Employee]    Script Date: 06/11/2015 21:38:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employee](
	[EmployeeId] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](50) NOT NULL,
	[LastName] [nvarchar](50) NOT NULL,
	[DailyWorkingHours] [decimal](4, 2) NOT NULL,
 CONSTRAINT [PK_Employee] PRIMARY KEY CLUSTERED 
(
	[EmployeeId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Project]    Script Date: 06/11/2015 21:38:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Project](
	[ProjectId] [int] IDENTITY(1,1) NOT NULL,
	[ProjectName] [nvarchar](250) NOT NULL,
	[StartDate] [date] NOT NULL,
	[OriginalDeadline] [date] NOT NULL,
	[OriginalHours] [int] NOT NULL,
	[PricePerHour] [decimal](18, 2) NULL,
	[OriginalPrice] [decimal](18, 2) NOT NULL,
	[UseProjectHourPrice] [bit] NOT NULL,
 CONSTRAINT [PK_Project] PRIMARY KEY CLUSTERED 
(
	[ProjectId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[NewProjectEstimate]    Script Date: 06/11/2015 21:38:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProjectEstimate](
	[ProjectEstimateId] [int] IDENTITY(1,1) NOT NULL,
	[ProjectId] [int] NOT NULL,
	[Date] [date] NOT NULL,
	[EstimateHours] [decimal](18, 2) NULL,
	[EstimatePrice] [decimal](18, 2) NULL,
 CONSTRAINT [PK_NewProjectEstimate] PRIMARY KEY CLUSTERED 
(
	[ProjectEstimateId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Budget]    Script Date: 2015-06-26 11:18:17 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Budget](
	[BudgetId] [int] IDENTITY(1,1) NOT NULL,
	[ProjectId] [int] NOT NULL,
	[CreatedDate] [date] NOT NULL,
	[BudgetHours] [decimal](18, 2) NULL,
	[BudgetMoney] [decimal](18, 2) NULL,
	[Deadline] [date] NOT NULL,
 CONSTRAINT [PK_Budget] PRIMARY KEY CLUSTERED 
(
	[BudgetId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[EmployeeProjectWorkingHours]    Script Date: 06/11/2015 21:38:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmployeeProjectWorkingHours](
	[EmployeeProjectWorkingHoursId] [int] IDENTITY(1,1) NOT NULL,
	[EmployeeId] [int] NOT NULL,
	[ProjectId] [int] NOT NULL,
	[Date] [date] NOT NULL,
	[WorkedHours] [decimal](2, 2) NOT NULL,
 CONSTRAINT [PK_EmployeeProjectWorkingHours_1] PRIMARY KEY CLUSTERED 
(
	[EmployeeProjectWorkingHoursId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmployeeProject]    Script Date: 06/11/2015 21:38:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmployeeProject](
	[EmployeeId] [int] NOT NULL,
	[ProjectId] [int] NOT NULL,
	[AverageDailyHours] [decimal](4, 2) NOT NULL,
	[PricePerHour] [decimal](7, 2) NULL,
 CONSTRAINT [PK_EmployeeProject] PRIMARY KEY CLUSTERED 
(
	[EmployeeId] ASC,
	[ProjectId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  ForeignKey [FK_NewProjectEstimate_Project]    Script Date: 06/11/2015 21:38:25 ******/
ALTER TABLE [dbo].[ProjectEstimate]  WITH CHECK ADD  CONSTRAINT [FK_ProjectEstimate_Project] FOREIGN KEY([ProjectId])
REFERENCES [dbo].[Project] ([ProjectId])
GO
ALTER TABLE [dbo].[ProjectEstimate] CHECK CONSTRAINT [FK_ProjectEstimate_Project]
GO
ALTER TABLE [dbo].[Budget]  WITH CHECK ADD  CONSTRAINT [FK_Budget_Project] FOREIGN KEY([ProjectId])
REFERENCES [dbo].[Project] ([ProjectId])
GO
ALTER TABLE [dbo].[Budget] CHECK CONSTRAINT [FK_Budget_Project]
GO
/****** Object:  ForeignKey [FK_EmployeeProjectWorkingHours_Employee]    Script Date: 06/11/2015 21:38:25 ******/
ALTER TABLE [dbo].[EmployeeProjectWorkingHours]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeProjectWorkingHours_Employee] FOREIGN KEY([EmployeeId])
REFERENCES [dbo].[Employee] ([EmployeeId])
GO
ALTER TABLE [dbo].[EmployeeProjectWorkingHours] CHECK CONSTRAINT [FK_EmployeeProjectWorkingHours_Employee]
GO
/****** Object:  ForeignKey [FK_EmployeeProjectWorkingHours_Project]    Script Date: 06/11/2015 21:38:25 ******/
ALTER TABLE [dbo].[EmployeeProjectWorkingHours]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeProjectWorkingHours_Project] FOREIGN KEY([ProjectId])
REFERENCES [dbo].[Project] ([ProjectId])
GO
ALTER TABLE [dbo].[EmployeeProjectWorkingHours] CHECK CONSTRAINT [FK_EmployeeProjectWorkingHours_Project]
GO
/****** Object:  ForeignKey [FK_EmployeeProject_Employee]    Script Date: 06/11/2015 21:38:25 ******/
ALTER TABLE [dbo].[EmployeeProject]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeProject_Employee] FOREIGN KEY([EmployeeId])
REFERENCES [dbo].[Employee] ([EmployeeId])
GO
ALTER TABLE [dbo].[EmployeeProject] CHECK CONSTRAINT [FK_EmployeeProject_Employee]
GO
/****** Object:  ForeignKey [FK_EmployeeProject_Project]    Script Date: 06/11/2015 21:38:25 ******/
ALTER TABLE [dbo].[EmployeeProject]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeProject_Project] FOREIGN KEY([ProjectId])
REFERENCES [dbo].[Project] ([ProjectId])
GO
ALTER TABLE [dbo].[EmployeeProject] CHECK CONSTRAINT [FK_EmployeeProject_Project]
GO
